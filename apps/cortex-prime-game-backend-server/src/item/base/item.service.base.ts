/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Item as PrismaItem,
  Character as PrismaCharacter,
  ItemBonus as PrismaItemBonus,
} from "@prisma/client";

export class ItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ItemCountArgs, "select">): Promise<number> {
    return this.prisma.item.count(args);
  }

  async items(args: Prisma.ItemFindManyArgs): Promise<PrismaItem[]> {
    return this.prisma.item.findMany(args);
  }
  async item(args: Prisma.ItemFindUniqueArgs): Promise<PrismaItem | null> {
    return this.prisma.item.findUnique(args);
  }
  async createItem(args: Prisma.ItemCreateArgs): Promise<PrismaItem> {
    return this.prisma.item.create(args);
  }
  async updateItem(args: Prisma.ItemUpdateArgs): Promise<PrismaItem> {
    return this.prisma.item.update(args);
  }
  async deleteItem(args: Prisma.ItemDeleteArgs): Promise<PrismaItem> {
    return this.prisma.item.delete(args);
  }

  async findCharacter(
    parentId: string,
    args: Prisma.CharacterFindManyArgs
  ): Promise<PrismaCharacter[]> {
    return this.prisma.item
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .character(args);
  }

  async getItemBonuses(parentId: string): Promise<PrismaItemBonus | null> {
    return this.prisma.item
      .findUnique({
        where: { id: parentId },
      })
      .itemBonuses();
  }
}
