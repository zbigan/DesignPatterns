export default class Singleton {
  private static instance: Singleton

  private constructor() {}

  getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }

    return Singleton.instance
  }
}
