/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SeasonColorWhereInput } from "./SeasonColorWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SeasonColorListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SeasonColorWhereInput,
  })
  @ValidateNested()
  @Type(() => SeasonColorWhereInput)
  @IsOptional()
  @Field(() => SeasonColorWhereInput, {
    nullable: true,
  })
  every?: SeasonColorWhereInput;

  @ApiProperty({
    required: false,
    type: () => SeasonColorWhereInput,
  })
  @ValidateNested()
  @Type(() => SeasonColorWhereInput)
  @IsOptional()
  @Field(() => SeasonColorWhereInput, {
    nullable: true,
  })
  some?: SeasonColorWhereInput;

  @ApiProperty({
    required: false,
    type: () => SeasonColorWhereInput,
  })
  @ValidateNested()
  @Type(() => SeasonColorWhereInput)
  @IsOptional()
  @Field(() => SeasonColorWhereInput, {
    nullable: true,
  })
  none?: SeasonColorWhereInput;
}
export { SeasonColorListRelationFilter as SeasonColorListRelationFilter };
