import {
  GetUsersResponse,
  GetUserByIdResponse,
  AddUserResponse,
  UpdateUserResponse,
  DeleteUserResponse,
} from "../../../dist/api/users/types"
import { Api } from "../../../dist/models"
import { collections } from "../../admin/admin"

export class UserApi implements UserApi {
  getUsers(): Promise<GetUsersResponse> {
    return new Promise<GetUsersResponse>(async (resolve, reject) => {
      try {
        const users = await collections
          .users!.find({})
          ?.map((user) => {
            return {
              id: user._id,
              name: user.name,
              email: user.email,
              password: user.password,
              role: user.role,
              createdAt: user.createdAt,
              updatedAt: user.updatedAt,
            }
          })
          .toArray()
        const response: GetUsersResponse = {
          status: 200,
          body: users,
        }
        resolve(response)
      } catch (error) {
        /* const response: Api.ApiResponse = {
          code: 400,
          message: "Something Went Wrong",
        } */
        reject(error)
      }
    })
  }
}
