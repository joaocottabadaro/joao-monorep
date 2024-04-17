interface TokenTableProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokenTable({ tokens, hasRemValue = false }: TokenTableProps) {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Name
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(tokens).map(([key, value]) => {
            return (
              <tr className="m-0 border-t p-0 even:bg-muted" key={key}>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  {key}
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  {value}
                </td>
                {hasRemValue && (
                  <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    {Number(value.replace('rem', '')) * 16}px
                  </td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
