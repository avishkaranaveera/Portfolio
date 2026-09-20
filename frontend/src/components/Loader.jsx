export default function Loader({ leaving }) {
  return (
    <div className={`loader ${leaving ? "loader-leaving" : ""}`}>
      <div className="loader-mark">
        <span className="loader-bracket">{"{"}</span>
        <span className="loader-name">Avishka Ranaveera</span>
        <span className="loader-bracket">{"}"}</span>
      </div>
      <div className="loader-bar">
        <div className="loader-bar-fill" />
      </div>
    </div>
  );
}
