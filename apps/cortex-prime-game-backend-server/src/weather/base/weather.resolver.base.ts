/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Weather } from "./Weather";
import { WeatherCountArgs } from "./WeatherCountArgs";
import { WeatherFindManyArgs } from "./WeatherFindManyArgs";
import { WeatherFindUniqueArgs } from "./WeatherFindUniqueArgs";
import { CreateWeatherArgs } from "./CreateWeatherArgs";
import { UpdateWeatherArgs } from "./UpdateWeatherArgs";
import { DeleteWeatherArgs } from "./DeleteWeatherArgs";
import { WeatherService } from "../weather.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Weather)
export class WeatherResolverBase {
  constructor(
    protected readonly service: WeatherService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Weather",
    action: "read",
    possession: "any",
  })
  async _weathersMeta(
    @graphql.Args() args: WeatherCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Weather])
  @nestAccessControl.UseRoles({
    resource: "Weather",
    action: "read",
    possession: "any",
  })
  async weathers(
    @graphql.Args() args: WeatherFindManyArgs
  ): Promise<Weather[]> {
    return this.service.weathers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Weather, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Weather",
    action: "read",
    possession: "own",
  })
  async weather(
    @graphql.Args() args: WeatherFindUniqueArgs
  ): Promise<Weather | null> {
    const result = await this.service.weather(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Weather)
  @nestAccessControl.UseRoles({
    resource: "Weather",
    action: "create",
    possession: "any",
  })
  async createWeather(
    @graphql.Args() args: CreateWeatherArgs
  ): Promise<Weather> {
    return await this.service.createWeather({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Weather)
  @nestAccessControl.UseRoles({
    resource: "Weather",
    action: "update",
    possession: "any",
  })
  async updateWeather(
    @graphql.Args() args: UpdateWeatherArgs
  ): Promise<Weather | null> {
    try {
      return await this.service.updateWeather({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Weather)
  @nestAccessControl.UseRoles({
    resource: "Weather",
    action: "delete",
    possession: "any",
  })
  async deleteWeather(
    @graphql.Args() args: DeleteWeatherArgs
  ): Promise<Weather | null> {
    try {
      return await this.service.deleteWeather(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
