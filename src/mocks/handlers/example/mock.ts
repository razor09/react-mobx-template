import { faker } from '@faker-js/faker'
import { Count } from '../base/typings'

class Mock {
  private readonly map = new Map<number, object>()
  private readonly items = Array.from<typeof this.map>({ length: Count.Minimal })

  private readonly collection = this.items.reduce((collection, _, index) => {
    const id = index + 1
    const object = this.initialize(id)
    return collection.set(id, object)
  }, this.map)

  public get random(): object {
    const id = faker.number.int({
      min: Count.Minimal,
      max: this.collection.size,
    })
    return this.one(id)
  }

  private initialize(id: number): object {
    return { id }
  }

  public all(_: number): object[] {
    const iterator = this.collection.values()
    return Array.from(iterator)
  }

  public one(id: number): object {
    return this.collection.get(id)
  }

  public create(body: object): object {
    const id = this.collection.size + 1
    return this.update(id, body)
  }

  public update(id: number, body: object): object {
    const object = { id, ...body }
    this.collection.set(id, object)
    return object
  }

  public delete(id: number): object {
    const object = this.one(id)
    this.collection.delete(id)
    return object
  }
}

export const mock = new Mock()
