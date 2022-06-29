// Learn more about destination functions API at
// https://segment.com/docs/connections/destinations/destination-functions

/**
 * Handle track event
 * @param  {SegmentTrackEvent} event
 * @param  {FunctionSettings} settings
 */
async function onTrack(event, settings) {
  // Learn more at https://segment.com/docs/connections/spec/track/
  const endpoint = 'https://api.sendgrid.com/v3/marketing/contacts'; // replace with your endpoint
  let response;

  if (event.event === 'product_view_event' && event.userId != '') {
    try {
      response = await fetch(endpoint, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${settings.sendgridApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contacts: [
            {
              email: event.userId,
              custom_fields: {
                e2_T: event.properties.product_url
              }
            }
          ]
        })
      });

    } catch (error) {
      // Retry on connection error
      throw new RetryError(error.message);
    }
  }

  if (event.event === 'User Registered') {
    try {
      response = await fetch(endpoint, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${settings.sendgridApiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contacts: [
            {
              email: event.userId,
              first_name: event.properties.firstName,
              last_name: event.properties.lastName
            }
          ]
        })
      });

    } catch (error) {
      // Retry on connection error
      throw new RetryError(error.message);
    }
  }

  if (response.status >= 500 || response.status === 429) {
    // Retry on 5xx (server errors) and 429s (rate limits)
    throw new RetryError(`Failed with ${response.status}`);
  }
}

/**
 * Handle identify event
 * @param  {SegmentIdentifyEvent} event
 * @param  {FunctionSettings} settings
 */
async function onIdentify(event, settings) {
  // Learn more at https://segment.com/docs/connections/spec/identify/
  throw new EventNotSupported('identify is not supported');
}

/**
 * Handle group event
 * @param  {SegmentGroupEvent} event
 * @param  {FunctionSettings} settings
 */
async function onGroup(event, settings) {
  // Learn more at https://segment.com/docs/connections/spec/group/
  throw new EventNotSupported('group is not supported');
}

/**
 * Handle page event
 * @param  {SegmentPageEvent} event
 * @param  {FunctionSettings} settings
 */
async function onPage(event, settings) {
  // Learn more at https://segment.com/docs/connections/spec/page/
  throw new EventNotSupported('page is not supported');
}

/**
 * Handle screen event
 * @param  {SegmentScreenEvent} event
 * @param  {FunctionSettings} settings
 */
async function onScreen(event, settings) {
  // Learn more at https://segment.com/docs/connections/spec/screen/
  throw new EventNotSupported('screen is not supported');
}

/**
 * Handle alias event
 * @param  {SegmentAliasEvent} event
 * @param  {FunctionSettings} settings
 */
async function onAlias(event, settings) {
  // Learn more at https://segment.com/docs/connections/spec/alias/
  throw new EventNotSupported('alias is not supported');
}

/**
 * Handle delete event
 * @param  {SegmentDeleteEvent} event
 * @param  {FunctionSettings} settings
 */
async function onDelete(event, settings) {
  // Learn more at https://segment.com/docs/partners/spec/#delete
  throw new EventNotSupported('delete is not supported');
}