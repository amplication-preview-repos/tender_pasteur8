/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TraitService } from "../trait.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TraitCreateInput } from "./TraitCreateInput";
import { Trait } from "./Trait";
import { TraitFindManyArgs } from "./TraitFindManyArgs";
import { TraitWhereUniqueInput } from "./TraitWhereUniqueInput";
import { TraitUpdateInput } from "./TraitUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TraitControllerBase {
  constructor(
    protected readonly service: TraitService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Trait })
  @nestAccessControl.UseRoles({
    resource: "Trait",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: TraitCreateInput,
  })
  async createTrait(@common.Body() data: TraitCreateInput): Promise<Trait> {
    return await this.service.createTrait({
      data: {
        ...data,

        traitSet: data.traitSet
          ? {
              connect: data.traitSet,
            }
          : undefined,
      },
      select: {
        bonus: true,
        createdAt: true,
        formula: true,
        id: true,
        name: true,

        traitSet: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Trait] })
  @ApiNestedQuery(TraitFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Trait",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async traits(@common.Req() request: Request): Promise<Trait[]> {
    const args = plainToClass(TraitFindManyArgs, request.query);
    return this.service.traits({
      ...args,
      select: {
        bonus: true,
        createdAt: true,
        formula: true,
        id: true,
        name: true,

        traitSet: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Trait })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Trait",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async trait(
    @common.Param() params: TraitWhereUniqueInput
  ): Promise<Trait | null> {
    const result = await this.service.trait({
      where: params,
      select: {
        bonus: true,
        createdAt: true,
        formula: true,
        id: true,
        name: true,

        traitSet: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Trait })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Trait",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: TraitUpdateInput,
  })
  async updateTrait(
    @common.Param() params: TraitWhereUniqueInput,
    @common.Body() data: TraitUpdateInput
  ): Promise<Trait | null> {
    try {
      return await this.service.updateTrait({
        where: params,
        data: {
          ...data,

          traitSet: data.traitSet
            ? {
                connect: data.traitSet,
              }
            : undefined,
        },
        select: {
          bonus: true,
          createdAt: true,
          formula: true,
          id: true,
          name: true,

          traitSet: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Trait })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Trait",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTrait(
    @common.Param() params: TraitWhereUniqueInput
  ): Promise<Trait | null> {
    try {
      return await this.service.deleteTrait({
        where: params,
        select: {
          bonus: true,
          createdAt: true,
          formula: true,
          id: true,
          name: true,

          traitSet: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
