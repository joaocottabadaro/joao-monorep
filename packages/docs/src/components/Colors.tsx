import { getContrast } from 'polished'

interface ColorsProps {
  colors: Record<string, string>
}

export function Colors({ colors }: ColorsProps) {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key}>
        <div
          className="flex justify-between p-sm"
          style={{
            background: color,
            color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
          }}
        >
          <strong>{key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
