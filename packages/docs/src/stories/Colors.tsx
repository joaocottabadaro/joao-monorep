import { colors } from '@joao-ui/tokens/src'
import { getContrast } from 'polished'

export function Colors() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key}>
        <div
          className="flex justify-between p-4"
          style={{
            background: color,
            color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
