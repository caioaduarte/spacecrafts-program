class TransportSpaceship extends Spaceship {
  constructor(name, crewQuantity, seatsQuantity) {
    super(name, crewQuantity)
    this.weaponsQuantity = seatsQuantity
  }
}