function ErrorMsg({ dailyLife }) {
  return <>{dailyLife.length === 0 && <h1>Nothing to do!!!</h1>}</>;
}
export default ErrorMsg;
