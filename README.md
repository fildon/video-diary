# Video Diary

A gallery of short-form daily videos.

Hosted on [rupertmckay.com/video-diary](https://rupertmckay.com/video-diary)

## My Workflow

I use [One Second Diary](https://play.google.com/store/apps/details?id=com.kylekun.one_second_diary&pcampaignid=web_share) to make the videos.

At the end of each month I upload the full video to Dropbox, so that I can get it on a work device, from which I can add the video to the source repository.

Beware using messaging apps to transfer the videos between devices since in many cases these will compress the video.

Aside from managing the video files, only a small HTML update is needed with each upload to present the video in the webpage.

There is no build process nor dependencies necessary in this repository. The HTML is served as-is by GitHub pages. The videos are also served by GitHub, note the peculiar URLs in the HTML video elements. _If_ GitHub change the exact routing scheme of repository files in future, this links might no longer work. In which case I would need to investigate hosting/serving the videos from somewhere else.

A quirk of this process is that videos cannot be previewed when viewing the HTML served by the local file system, until the video is uploaded to GitHub.
