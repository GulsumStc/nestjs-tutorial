import { CreateListingDto } from "./create-listing.dto";

export class CreateItemDto {
  name: string;
  public: boolean;
  additionalInfo: Record<string, any>;

  listing: CreateListingDto;
}
