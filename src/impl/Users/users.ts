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

  getUserById(email: string): Promise<GetUserByIdResponse> {
    return new Promise<GetUserByIdResponse>(async (resolve, reject) => {
      try {
        const isPresent = await collections.users!.findOne({ email })
        if (isPresent) {
          const formattedData = {
            id: isPresent._id,
            name: isPresent.name,
            email: isPresent.email,
            password: isPresent.password,
            role: isPresent.role,
            createdAt: isPresent.createdAt,
            updatedAt: isPresent.updatedAt,
          }
          const response: GetUserByIdResponse = {
            status: 200,
            body: formattedData,
          }
          resolve(response)
        } else {
          const response: GetUserByIdResponse = {
            status: 404,
            body: {
              message: "User not found",
            },
          }
          resolve(response)
        }
      } catch (error) {
        /* const response: Api.ApiResponse = {
          code: 400,
          message: "Something Went Wrong",
        } */
        reject(error)
      }
    })
  }

  addUser(request: Api.User): Promise<AddUserResponse> {
    return new Promise<AddUserResponse>(async (resolve, reject) => {
      try {
        const isPresent = await collections.users!.findOne({
          email: request.email,
        })
        if (isPresent) {
          const response: AddUserResponse = {
            status: 400,
            body: {
              code: 400,
              message: "User Already Exists",
            },
          }
          resolve(response)
        } else {
          const result = await collections.users!.insertOne(request)
          const response: AddUserResponse = {
            status: 200,
            body: request,
          }
          resolve(response)
        }
      } catch (err) {
        /* const response: Api.ApiResponse = {
          code: 400,
          message: "Something Went Wrong",
        } */
        reject(err)
      }
    })
  }
}
