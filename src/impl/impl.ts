import { ApiImplementation } from "../../dist/types"
import { UserApi } from "./Users/users"

export class serviveApi implements ApiImplementation {
  users: UserApi = new UserApi()
}
