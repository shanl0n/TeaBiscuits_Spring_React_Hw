import { Types } from "./TeaBiscuitForm"

const TeaList = ({ teas, onDelete, onShowUpdate }) => {
  return (
    <div id="tea-list">
      <h2>All the teas!</h2>
      <ul>
        {teas.map(tea => {
          return (
            <li key={tea.id}>
              <button onClick={() =>onDelete(tea)}>Delete </button>
              <button onClick={() =>onShowUpdate({
                ...tea,
                type: Types.TEAS
              })}>Update</button>
              {tea.name} by {tea.brand}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TeaList