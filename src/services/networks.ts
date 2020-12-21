import EntityNetwork from 'domain/Network';

class Network implements EntityNetwork {
  constructor(public id: number, public title: string) {}

  public meta() {
    return `${this.id}: ${this.title}`;
  }
}

class Networks {
  public static serialize(entity: EntityNetwork): Network {
    return entity as Network;
  }
}

export { Network };

export default Networks;
