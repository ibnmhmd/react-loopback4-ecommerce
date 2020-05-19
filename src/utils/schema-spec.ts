export const UserProfileSchema = {
    type: 'object',
    required: ['id'],
    properties: {
      id: {type: 'string'},
      email: {type: 'string'},
      name: {type: 'string'},
    },
  };