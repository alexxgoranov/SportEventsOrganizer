import { object, number, string, TypeOf } from 'zod';

const payload = {
    body: object({
        title: string({
            required_error: "Title is required"
        }).min(120, "Description should be at least 120 characters long"),
        description: string({
            required_error: "Description is required"
        })
    })

}

const params = {
    params: object({
        eventId: string({
            required_error: 'Eventis is required'
        })
    })
}

export const createEventSchema = object({
    ...payload

})

export const updateEventSchema = object({
    ...payload,
    ...params
})

export const deleteEventSchema = object({
    ...params
})

export const getEventSchema = object({
    ...params
})

export type CreateEventInput = TypeOf<typeof createEventSchema>
export type UpdateEventInput = TypeOf<typeof updateEventSchema>
export type ReadEventInput = TypeOf<typeof getEventSchema>
export type DeleteEventInput = TypeOf<typeof deleteEventSchema>
