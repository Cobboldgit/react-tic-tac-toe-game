
function AlertWinner({ winner, handleAlert }) {

  return (
    <div className="alert--background" onClick={handleAlert}>
      <div className="alert--box">
        <p>
          Winner: <span>{winner}</span>
        </p>
        <button onClick={handleAlert}>OK</button>
      </div>
    </div>
  );
}

export default AlertWinner;
