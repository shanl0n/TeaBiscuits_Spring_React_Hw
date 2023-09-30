import { Types } from "./TeaBiscuitForm"

const BiscuitList = ({ biscuits, onDelete, onShowUpdate }) => {
  return (
    <div id="biscuit-list">
      <h2>All the biccys!</h2>
      <ul>
        {biscuits.map(biscuit => {
          return (
            <li key={biscuit.id}>
              <button onClick={() =>onDelete(biscuit)}>Delete</button>
              <button onClick={() =>onShowUpdate({
                ...biscuit,
                type: Types.BISCUITS
              })}>Update</button>
              {biscuit.name} by {biscuit.brand}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default BiscuitList