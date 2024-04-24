interface TokenTableProps {
  tokens: Record<string, string>
}

export function TokenTable({ tokens }: TokenTableProps) {
  return (
    <div className="my-6 w-full overflow-y-auto bg-red ">
      <table className="w-full border-collapse">
        <thead>
          <tr className="m-0 border-t  even:bg-muted">
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right text-xs">
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
              <tr className="m-0 border-t  even:bg-muted" key={key}>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right ">
                  {key}
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  {value}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
