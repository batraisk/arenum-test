export default function(instance) {
  return {
    getTournaments(start=0) {
      return instance.get(`?start=${start}&gameCode=f533d4be-5b8e-11e9-8647-d663bd873d93&max=15&includePaid=true`);
    }
  }
}
