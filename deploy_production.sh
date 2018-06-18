gulp build
rm processstreet.zip
zip -r processstreet.zip release/
scp processstreet.zip ubuntu@poletalks.com:~/
ssh ubuntu@poletalks.com
