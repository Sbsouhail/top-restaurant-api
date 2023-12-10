export default ({ env }) => ({
  "users-permissions": {
    config: {
      register: {
        allowedFields: ["is_restaurant_owner", "role"],
      },
    },
  },
});
