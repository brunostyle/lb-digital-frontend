import * as Yup from 'yup'

export const searchSchema = Yup.object({
   query: Yup.string().trim().required()
})