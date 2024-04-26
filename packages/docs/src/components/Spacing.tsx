import { configUtopiaSpacing, spacing } from '@joao-ui/tokens'
import { useEffect, useMemo, useState } from 'react'
import { useWindowSize } from '../hooks/useWindowResize'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Slider,
} from '@joao-ui/react'

export function Spacing() {
  const [width] = useWindowSize()
  const [widthContainer, setwidthContainer] = useState(width)
  const { minWidth, maxWidth } = configUtopiaSpacing
  const extractValuesFromClamp = (clampString: string) => {
    // Remove 'clamp(' e ')' do início e do fim da string
    const cleanedString = clampString.replace(/clamp\(/, '').replace(/\)/, '')

    // Divide a string em partes usando ','
    const parts = cleanedString.split(',')

    // Remove os espaços em branco em cada parte

    // Extrai os valores
    const minValue = parseFloat(parts[0])

    // Extrai o valor do meio e divide em rem e vi
    const middleValue = parts[1].split('+')
    const remValue = parseFloat(middleValue[0])
    const viValue = parseFloat(middleValue[1])

    const maxValue = parseFloat(parts[2])

    return [minValue, remValue, viValue, maxValue]
  }

  const calculateCurrentPX = useMemo(() => {
    return (clamp: string) => {
      const [min, rem, vi, max] = extractValuesFromClamp(clamp)

      const remPixels = rem * 16
      const viPixels = vi * (widthContainer / 100)

      let totalPixels = remPixels + viPixels
      if (widthContainer >= maxWidth) totalPixels = max * 16
      if (widthContainer <= minWidth) totalPixels = min * 16

      return totalPixels.toFixed(0)
    }
  }, [maxWidth, minWidth, widthContainer])

  useEffect(() => {
    setwidthContainer(width)
  }, [width])

  return (
    <div className="my-6  overflow-y-auto">
      <Card className="w-[400px] m-auto">
        <>
          <CardHeader className="flex flex-row flex-nowrap gap-sm items-center justify-between">
            <CardTitle className="font-normal">Current screen size:</CardTitle>
            <span className="block font-bold text-sm">{widthContainer}</span>
          </CardHeader>
          <CardContent>
            <Slider
              value={[widthContainer]}
              onValueChange={(event) => setwidthContainer(event[0])}
              step={10}
              min={320}
              max={width}
            />
          </CardContent>
        </>
      </Card>

      <table className="w-full border-collapse">
        <thead>
          <tr className="m-0 border-t  even:bg-muted">
            <th className="border px-4 py-2 text-center font-bold  text-xs">
              Name
            </th>
            <th className="border px-4 py-2 text-left font-bold  text-xs">
              Current
            </th>
            <th className="border px-4 py-2 text-left font-bold  text-xs flex justify-between">
              @Min({minWidth}px) <span>@Max({maxWidth}px)</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {spacing.sizes
            .map((item) => {
              return (
                <tr className="m-0 border-t  even:bg-muted" key={item.clamp}>
                  <td className="border px-sm ">
                    <h2 className="p-sm rounded-full bg-primary w-sm h-sm flex items-center justify-center text-white ">
                      {' '}
                      {item.label}
                    </h2>
                  </td>
                  <td className="border px-4 py-2 text-left  ">
                    {calculateCurrentPX(item.clamp)} px
                    <span
                      style={{
                        width: `${calculateCurrentPX(item.clamp)}px`,
                        height: `${calculateCurrentPX(item.clamp)}px`,
                      }}
                      className="flex bg-primary"
                    />
                  </td>
                  <td className="border px-4 py-2 text-left  flex justify-between">
                    <div className="flex flex-col gap-2xs">
                      {item.minSize} px
                      <span
                        style={{ width: item.minSize, height: item.minSize }}
                        className="flex bg-primary"
                      />
                    </div>
                    <div className="flex flex-col gap-2xs">
                      {item.maxSize} px
                      <span
                        style={{ width: item.maxSize, height: item.maxSize }}
                        className="flex bg-primary"
                      />
                    </div>
                  </td>
                </tr>
              )
            })
            .reverse()}
        </tbody>
      </table>
    </div>
  )
}
