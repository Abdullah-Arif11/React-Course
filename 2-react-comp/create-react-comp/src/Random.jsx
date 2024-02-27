function Random () {
  let number = Math.round(Math.random()*100)
  return <h1 style={{"backgroundColor" : "#776691"}}>The number is {number}</h1>
}
export default Random;