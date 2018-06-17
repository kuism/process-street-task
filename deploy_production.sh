gulp build
rm polebusinessweb.zip
zip -r polebusinessweb.zip release/
scp polebusinessweb.zip ubuntu@poletalks.com:~/
ssh ubuntu@poletalks.com
