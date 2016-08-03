# Deploying

*This is borrows pretty heavily from the [Keen.js deployment process](https://github.com/keen/keen-js/blob/master/DEPLOYING.md)* (thanks!)

## Preparing the release

1. Update `version` in [package.json](package.json)
2. Add an entry to [CHANGELOG.md](CHANGELOG.md) for this new release
3. Update [README.md](README.md) to reflect this new release (in both the title and sample `<script>` tag)
4. Commit these changes and push to master

## Cutting the release

1. Build the new assets with `npm run dist`
2. Force add the `dist` folder with `git add --force ./dist`
3. Commit this with `git commit -m "v{version} release"` but *don't push*
4. Tag this commit with `git tag v{version}`
5. Push *only* the tag with `git push origin v{version}`

## Deploying to AWS

1. Push the new assets to S3 with `aws s3 cp ./dist s3://fabl-js/v{version}/ --acl public-read --cache-control 'public, max-age=31536000' --recursive`
2. Verify the assets have been published by visiting `https://d389x1p5jhf88e.cloudfront.net/v{version}/fabl.min.js`

## Cleanup

Back out the `dist/` folder by running

```
git reset --soft HEAD~1
git rm --cached ./dist
```
