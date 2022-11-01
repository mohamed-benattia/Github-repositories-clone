
function NotFound () {
    return (
        <div className="notfound-container">
        <h1>404</h1>
        <h2>UH OH! You're lost.</h2>
        <p>The username you are looking for does not exist.
          How you got here is a mystery. But you can click the button below
          to go back to the homepage.
        </p>
        <button className="btn">HOME</button>
      </div>
    )
}
export default NotFound;