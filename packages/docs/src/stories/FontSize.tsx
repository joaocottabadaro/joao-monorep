import { configUtopiaFont, fontSize } from '@joao-ui/tokens'
import { useCallback } from 'react'
import { useWindowSize } from '../hooks/useWindowResize'

export function FontSize() {
  const [width] = useWindowSize()
  const { minWidth, maxWidth } = configUtopiaFont
  const extractValuesFromClamp = (clampString: string) => {
    // Remove 'clamp(' e ')' do início e do fim da string
    const cleanedString = clampString.replace(/clamp\(/, '').replace(/\)/, '')

    // Divide a string em partes usando ','
    const parts = cleanedString.split(',')
    console.log('🚀 ~ extractValuesFromClamp ~ parts:', parts)

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

  const calculateCurrentPX = useCallback(
    (clamp: string, fontSizeRoot: number) => {
      const [min, rem, vi, max] = extractValuesFromClamp(clamp)
      // const rem = clamp.
      // // Converter rem para pixels
      const remPixels = rem * fontSizeRoot
      console.log('🚀 ~ FontSize ~ remPixels:', remPixels)

      // // Converter vi para pixels (considerando largura da viewport)
      const viPixels = vi * (width / 100)
      console.log('🚀 ~ FontSize ~ viPixels:', viPixels)

      // // Somar os resultados
      let totalPixels = remPixels + viPixels
      if (width === maxWidth) totalPixels = max * 16
      if (width === minWidth) totalPixels = min * 16
      return totalPixels.toFixed(2)
    },
    [width, maxWidth, minWidth],
  )

  return (
    <div className="my-6 w-full overflow-y-auto bg-red ">
      Current screen size {window.innerWidth}
      <table className="w-full border-collapse">
        <thead>
          <tr className="m-0 border-t  even:bg-muted">
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right text-xs">
              Name
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right text-xs">
              Current
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right text-xs">
              @Min({minWidth}px)
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right text-xs">
              @Max({maxWidth}px)
            </th>
          </tr>
        </thead>
        <tbody>
          {fontSize.map((item) => {
            return (
              <tr className="m-0 border-t  even:bg-muted" key={item.clamp}>
                <td
                  className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right "
                  style={{ fontSize: item.clamp }}
                >
                  Step {item.step}
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right ">
                  {calculateCurrentPX(item.clamp, 16)}
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right ">
                  {item.minFontSize}
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right ">
                  {item.maxFontSize}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
