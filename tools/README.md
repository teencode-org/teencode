# Feature flags

We use feature flags to enable or disable deployed features.

`NB: You must have created a .env file in the root directory.`

## List of current feature flags

* CURRICULUM_ENABLED
* CONTACT_US_ENABLED
* MISSION_PAGE_ENABLED
* VOLUNTEER_ENABLED
* BLOG_PAGE_ENABLED
* ABOUT_US_ENABLED

## Adding a feature flag

1. Create the flag in your local `.env` file
2. Add the flag in `/tools/featureFlags`
3. Create a check function in `/src/js/utils/featureFlagChecks`
4. Import the function you just created in the file you want to use the flag. And use :)
5. Once you've confirmed the feature is safely hidden behind a flag, submit the flag to be created in staging and production.

