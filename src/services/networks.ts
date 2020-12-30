import DomainNetwork from 'domain/Network';

class Network implements DomainNetwork {
  constructor(
    public id: number,
    public title: string,
    public description: string,
  ) {}

  public meta() {
    return `${this.id}: ${this.title} ${this.description}`;
  }
}

class Networks {
  public static serialize(entity: DomainNetwork): Network {
    return entity as Network;
  }
}

export { Network };

export default Networks;
