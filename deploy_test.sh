gulp build
rm polebusinessweb.zip
zip -r polebusinessweb.zip release/
rm -r release/
scp polebusinessweb.zip ubuntu@test.poletalks.com:~/
ssh ubuntu@test.poletalks.com
