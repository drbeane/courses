# Week 1: Google Colab

**MATH 309/509 Math for AI** · Python

In this lesson, we will be discussing Google Colab, a cloud computing service that we will use throughout this course. The concepts in this lesson are demonstrated in the Google Colab notebook [Google Colab Intro.ipynb](https://colab.research.google.com/drive/1ons_hrVd7amkRCTjviwD4rM86bba3gSu?usp=sharing). We will discuss this notebook in more detail below.

## Intro to Google Colab

**Google Colab** is a cloud computing service offered by Google. It provides the ability to host, execute, share, and collaborate on cloud-based interactive notebooks within which you can write and execute Python code. This lesson will provide an overview of some of the features of Colab.

To use the services we will discuss in this lesson, you will need to have a Google account. You can create a Google account or sign in to an existing account by visiting the following page: [Google Sign In](https://accounts.google.com/signup/v2/createaccount).

## Setting up course folder on Google Drive

Google Drive is a document hosting service provided by Google. It can be accessed by clicking on the following link: [Google Drive](https://drive.google.com/drive/my-drive).

Several Colab notebooks will be provided to you throughout the term. These notebooks will be used for assignments and for content demonstrations. You should create a folder in your Google Drive account to store these documents. You can place this directory wherever you would like, but if you have no particular preference, the simplest option might be to place it in the top level of your Google Drive account.

After logging in to Drive, you can create a folder by right-clicking on the content section of the page and selecting "New Folder". I suggest naming the folder "Math\_for\_AI".

After completing this step, you should see something like what is displayed in the screenshot below (assuming you have no other content stored in Drive).

<img src="/images/image-59b95b1f-f832-4148-9d6f-10a928ea2d7f.png" alt="Google Drive My Drive page showing a folder named MATH_509.">

## Demonstration notebook

A demonstration notebook has been created for you to practice and walk you through some of the things you need to be familiar with relating to Google Colab. You can find that here: [Google Colab Intro.ipynb](https://colab.research.google.com/drive/1ons_hrVd7amkRCTjviwD4rM86bba3gSu?usp=sharing).

If you have already created a Google Account and have created your course folder, I recommend clicking on the link for the demo notebook and following the instructions contained in the remainder of this lesson. These instructions are also mentioned in the notebook itself.

## Copying content to the course folder

Several Google Colab notebooks have been created for this course and have been shared publicly. You can edit and run these notebooks online, but their contents will not be saved unless you first save the notebooks to your own Google Drive account.

To copy a notebook into your Google Drive account, you can follow the instructions below. Please practice this by completing these steps for the demo notebook.

1. Within the notebook, select: **"`File > Save a copy in Drive`"**
2. A new tab should open for the copied notebook. Move the new notebook to your course folder in Google Drive by selecting **`"File > Move"`** and then selecting the desired folder. By default, you will probably be placed into a "Colab Notebooks" directory. You can back out of this by clicking the back arrow next to the name of the folder. After you have selected your course folder, click **`"Select folder"`**.
3. You can confirm that the notebook is in your course folder by returning to the browser tab for your Google Drive and viewing the course folder. You should see a file named **`"Copy of Google_Colab_Demo.ipynb"`.**
4. Navigate back to the tab displaying your copy of the demo notebook, or double-click on it in your course directory. You can click on the name of the notebook in the upper-left corner to change the name. I recommend trying that. It doesn't really matter what you change the name to. You could remove the words "Copy of", change it to "My Copy of...", or could add your Maryville username somewhere to the title.

## Google Colab sidebar

Google Colab notebooks have a sidebar that contains some useful information and tools. This is likely collapsed by default. You can open the sidebar by clicking on any of the icons on the far left side of the screen. For instance, if you click on the <img class="inline" src="/images/hamburger.png" alt="Table of contents icon"> icon, it will display the table of contents for your notebook.

When you start a Google Colab notebook, a virtual machine fires up to run the notebook. You can view the contents of that virtual machine by clicking on the folder icon in the left sidebar.

## Google Colab interface

If you are familiar with Jupyter Notebooks, then the Google Colab interface will be somewhat familiar. Colab notebooks are based on Jupyter Notebooks, and the two environments share many features. The interfaces are laid out slightly differently, however. I encourage you to explore the menu items to make sure that you understand where various commands are located in Google Colab. You should be familiar with the following commands in particular:

- **`File > Save`**
- **`Edit > Clear all Outputs`**
- All commands in the **`"Runtime"`** menu.

If you are not already familiar with Jupyter Notebooks, that is alright. We will discuss the Google Colab interface in the next lesson.

## Running Python code

As with Jupyter Notebooks, you can write Python code in a code cell. This code can be executed by typing **`[CTRL/CMD] + [ENTER]`** or by clicking the run button that appears on the left side of the cell when you hover your mouse over the cell. You can test this in the demo notebook.

## Sharing notebooks

Each lab explains how to submit your work. If you ever have questions about an assignment, you should share a link to your notebook with your instructor when reaching out to them. You can create a share link by clicking on the "Share" button in the upper-right corner, selecting "Anyone with the link" from the dropdown, and then clicking "Copy link".

Note that sharing your assignments with other students is a serious form of academic dishonesty and will not be tolerated. If there is an indication that assignment notebooks are being shared between students, this will result in serious consequences likely including, but not limited to, all students involved receiving grades of 0 for the assignment.

## Generative AI in Colab

Google Colab notebooks contain generative AI tools that can be used to automatically generate code. This is an interesting feature, and can be worthwhile to explore. However, past experiences in this course have shown that the AI-generated answers are often incorrect and can lead students astray. Furthermore, the work you submit in this course is expected to be a product of your own efforts, not that of a generative AI algorithm. For these reasons, I **strongly** recommend disabling the AI features in Google Colab, at least while you are in this course. This can be accomplished as follows:

1. Navigate to **`Tools > Settings > AI Assistance`**
2. Uncheck "Show AI-powered inline completions" and "Consented to use generative AI features"
3. Check "Hide generative AI features"
