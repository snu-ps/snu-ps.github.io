import json, argparse
from oauth2client import client
from googleapiclient.discovery import build

parser = argparse.ArgumentParser(description='Get Google Calendar events')
parser.add_argument('--key', type=str, help='Google API key')
parser.add_argument('--output', type=str, help='Output file')
parser.add_argument('--calendars', type=str, nargs='+', help='Calendar IDs')
args = parser.parse_args()

try:
    service = build('calendar', 'v3', developerKey=args.key)
except Exception as e:
    print(f"An error occurred: {e}")

def get_calendar_events(calendar_id):
    calendar_events = []
    try:
        page_token = None
        while True:
            calendar_list = service.events().list(
                calendarId=calendar_id,
                showDeleted=False,
                singleEvents=True,
                maxResults=99999,
                timeZone='Asia/Seoul',
                pageToken=page_token
            ).execute()

            calendar_events.extend(calendar_list.get("items"))
            page_token = calendar_list.get("nextPageToken")
            if not page_token:
                break

    except client.AccessTokenRefreshError:
        print("The credentials have been revoked or expired, please re-run the application to re-authorize.")

    return calendar_events

def process_event(event):
    return event

events = []
for calendar in args.calendars:
    events.extend(process_event(event) for event in get_calendar_events(calendar))
with open(args.output, 'w') as f:
    json.dump(events, f)
