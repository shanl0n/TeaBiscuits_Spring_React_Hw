const BiscuitList = ({ biscuits, handleBiscuitDelete }) => {
  return (
    <div id="biscuit-list">
      <h2>All the biccys!</h2>
      <ul>
        {biscuits.map(biscuit => {
          return (
            <li key={biscuit.id}>
              <button onClick={() =>handleBiscuitDelete(biscuit)}>Delete </button>
              {biscuit.name} by {biscuit.brand}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default BiscuitList