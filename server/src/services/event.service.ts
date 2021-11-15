import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import EventModel, { EventDocument } from "../models/events.model";

export async function createEvent(input: DocumentDefinition<Omit<EventDocument, 'createdAt' | 'updatedAt'>>) {
    return EventModel.create(input)

}

export async function findEvent(query: FilterQuery<EventDocument>,
    options: QueryOptions = { lean: true }) {
    return EventModel.findOne(query, {}, options);
}

export async function findAndUpdateEvent(queryFilter: FilterQuery<EventDocument>,
    update: UpdateQuery<EventDocument>,
    options: QueryOptions) {
    return EventModel.findOneAndUpdate(queryFilter, update, options)
}

export async function deleteEvent(queryFilter: FilterQuery<EventDocument>) {
    return EventModel.deleteOne(queryFilter);
}