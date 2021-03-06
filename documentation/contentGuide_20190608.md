# How to edit/add content in the website

In this guide it is explained step by step how to perform the most common additions/changes in the website. 

## Important! Get the latest website files

**Contact Martin if you need help with this section** *Explain how to get the latest version of the files from GitHub.*

### Adding/editing a person in People > Members

1. Create (or edit the existing file, if you want to modify) a text file with name **people_[your unique name].md** in the main folder (you have several examples already there). Although not needed,it is better if you stick to the current naming convention of using as **[your unique name]** the first 2 letters of the first name followed by the first 2 letters of the surname of the person which you are adding the info of. So, for example, the file with Anna Martinez info is **people_anma.md**

2. Write the content of the file in markdown notation (you have several examples already there, so a little copy&paste will work wonders!).

3. Add the person image to the **/images** folder of the website files. Also, try to use the same resolution as the rest of the other personal images.

4. Edit the HTML file named **people_members.html**. Locate one of the blocks of code mark between the two comments of `<!-- base person info -->...<!-- end base person info -->`, copy it (with the two comments too!), and paste it in the logical place you want the person to be in the web page (usually right after the last similar block).

5. Inside the pasted block, change the image src to your new image and change the **people_[your unique name].md** reference to the one you created in the step 1), but WITHOUT the .md extension!.

6. Finished! Well done!.

**The same steps apply if you want to add someone in People > Associates (people_associates.html) and/or move a member to the People > Alumni (people_alumni.html) section.**

### Adding/editing publications in Resources > Publications

1. Create (or edit the existing file, if you want to modify) a text file with name **publication_[year]_[next in order].md** in the main folder (you have several examples already there). Although not needed, it is better if you stick to the current naming convention of using as **[year]** the numerical year of the publication and as **[next in order]** the following number after the more recent one of that year's publications. So, for example, the fourth publication for the year 2018 is **publication_2018_4.md**

2. Write the content of the file in markdown notation (you have several examples already there, so a little copy&paste will work wonders!).

3. Edit the HTML file named **resources_publications.html**. Locate one of the blocks (inside the proper year heading!) of code mark between the two comments of `<!-- base publication info -->...<!-- end base publication info -->`, copy it (with the two comments too!), and paste it in the logical place you want the publication to be in the web page (usally on top of all of the same year, if it's a more recent publication!).

5. Inside the pasted block, change the **publication_[year]_[next in order].md** reference to the one you created in the step 1), but WITHOUT the .md extension!.

6. Finished! Well done!.


### Adding/editing publications in Resources > SOP

1. Create (or edit the existing file, if you want to modify) a text file with name **resources_[name of protocol]_SOP.md** in the main folder (you have several examples already there). For example, the second protocol is **resources_IF_SOP.md**

2. Write the content of the file in markdown notation (you have several examples already there, so a little copy&paste will work wonders!).

3. Copy the protocol in PDF format.

4. Choose an image that represents the protocol, add it to the **/images** folder of the website files. Also, mind the resolution!.

5. Edit the HTML file named **resources_SOP.html**. Locate one of the blocks of code mark between the two comments of `<!-- base protocol info -->...<!-- end base protocol info -->`, copy it (with the two comments too!), and paste it in the logical place you want the protocol to be in the web page (usually right after the last similar block).

6. Inside the pasted block, change the **resources_[name of protocol]_SOP.md** reference to the one you created in the step 1), but WITHOUT the .md extension!.

7. Finished! Well done!.


### Adding/editing news in News > Lab news

1. Create (or edit the existing file, if you want to modify) a text file with name **news_[date].md** in the main folder (you have several examples already there). Although not needed, it is better if you stick to the current naming convention of using as **[date]** the numerical year followed by the numerical month and the numerical day, all together. So, for example, the first lab news, on 10th April 2019 is **news_20190410.md**

2. Write the content of the file in markdown notation (you have several examples already there, so a little copy&paste will work wonders!).

3. If the news need an image, add it to the **/images** folder of the website files. Also, mind the resolution!.

4. Edit the HTML file named **news_labNews.html**. Locate one of the blocks of code mark between the two comments of `<!-- base news info -->...<!-- end base news info -->`, copy it (with the two comments too!), and paste it in the logical place you want the news to be in the web page (usually on top off all of them, if they are more recent news!).

5. Inside the pasted block, change the **news_[date].md** reference to the one you created in the step 1), but WITHOUT the .md extension!.

6. Finished! Well done!.

### Adding/editing news in News > Talks

1. Create (or edit the existing file, if you want to modify) a text file with name **news_talk_[date of the talk].md** in the main folder (you have several examples already there). Although not needed, it is better if you stick to the current naming convention of using as **[date of the talk]** the numerical year followed by the numerical month and the numerical day, all together. So, for example, the file from 29th October 2018 is **news_talk_20181029.md**

2. Write the content of the file in markdown notation (you have several examples already there, so a little copy&paste will work wonders!).

3. Edit the HTML file named **news_talks.html**. Locate one of the blocks of code mark between the two comments of `<!-- base talks info -->...<!-- end base talks info -->`, copy it (with the two comments too!), and paste it in the logical place you want the news to be in the web page (usually on top off all of them, if they are more recent news!).

4. Inside the pasted block, change the **news_talk_[date of the talk].md** reference to the one you created in the step 1), but WITHOUT the .md extension!.

5. Finished! Well done!.


## Important! Send your changes when you are done.

**Contact Martin if you need help with this section** *Explain how to send the changes to GitHub*
