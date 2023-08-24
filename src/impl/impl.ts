import { ApiImplementation } from "../../dist/types"
import { UserApi } from "./Users/users"

export class ServiceApi implements ApiImplementation {
  users: UserApi = new UserApi()
}
