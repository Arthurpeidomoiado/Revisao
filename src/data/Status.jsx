export function Status({ string }) {
  if (string === "Concluido") {
    return <em className="Card_Concluido">{string}</em>
  }

  if (string === "Pendente") {
    return <em className="Card_Pendente">{string}</em>
  }
  return <em className="Card_Else">{string}</em>
}