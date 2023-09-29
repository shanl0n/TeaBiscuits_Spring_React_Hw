const TeaList = ({ teas, handleTeaDelete }) => {
  return (
    <div id="tea-list">
      <h2>All the teas!</h2>
      <ul>
        {teas.map(tea => {
          return (
            <li key={tea.id}>
              <button onClick={() =>handleTeaDelete(tea)}>Delete </button>
              {tea.name} by {tea.brand}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TeaList