import { ApiImplementation } from "../../dist/types"
import { UserApiImpl } from "./Users/users"

export class ServiceApImpl implements ApiImplementation {
  users: UserApiImpl = new UserApiImpl()
}
