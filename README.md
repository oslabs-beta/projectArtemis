Welcome to Artemis!

<div align="center">A Deno-built Analytics Tool for GraphQL Queries</div>

<div align="center">

<h1 align="center">
	<a>Artemis</a>
	    <div><img src="./public/artemis-logo.svg" /></div>
</h1>

<p align="center">from <em align="center">Our Team</em></p>

</div>

<p align="center">
  <img alt="GitHub" src="https://img.shields.io/github/license/oslabs-beta/projectArtemis?color=blue">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/oslabs-beta/projectArtemis?color=green">
  <img alt="GitHub All Releases" src="https://img.shields.io/github/downloads/oslabs-beta/projectArtemis/total?color=yellow">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/oslabs-beta/projectArtemis?color=orange">
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/oslabs-beta/projectArtemis?style=social">
</p>

If you wish to use the application without forking the repo, you may go to the following <a href src="https://project-artemis-v1.vercel.app"> website</a>.


## Features

Artemis provides analytics including latency, success and error rates, returned data size, and individual snapshots of each performed query.

## Overview

Artemis is Deno's first native GraphQL query analytics tool with a graphical user interface to visualize performance metrics.

Our dynamic graphical user interface (GUI), compiled using Aleph.js, allows users to send query requests to external APIs that work with GraphQL. Under the hood, our algorithm calculates performance metrics for each query request and displays them on graphs via Charts.js.

## To Get Started

Install Aleph by entering this command in your terminal.

```javascript
deno install -A -f -n aleph https://deno.land/x/aleph@v0.2.26/cli.ts
```

To load the GUI on your localhost, run the following command in your terminal.
```javascript
aleph dev
```

## Documentation and Demo

Simply enter the URL of an external API. Here is a great <a href src="https://github.com/APIs-guru/graphql-apis"> resource</a> for external APIs that work with GraphQL. Then, enter your query string and select the number of times you'd like the query to run.

You'll notice the graphs will render dynamically.

**Please note the functionality to run numerous queries is still being worked on. Use the default Number of queries(1).**

<div><img src="./public/query.gif" /></div>

## Making a Query

Syntax is extremely important for the success of your query.

Please refer to the following <a href src="https://graphql.org/">documentation</a> if you are not familiar with GraphQL queries.

Here is an example of a query request to Space X's API.

```javascript
URL: https://api.spacex.land/graphql

Query:
{
  launchesPast(limit: 10) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
    }
    rocket {
      rocket_name
      first_stage {
        cores {
          flight
          core {
            reuse_count
            status
          }
        }
      }
      second_stage {
        payloads {
          payload_type
          payload_mass_kg
          payload_mass_lbs
        }
      }
    }
    ships {
      name
      home_port
      image
    }
  }
}
```

[enter image of graphs after this]

## Authors

[Stella Liao](https://github.com/Stellaliao01)
[Erick Melendez](https://github.com/mlndz-la)
[Greg Dixon](https://github.com/greg-dixon)
[Taylor Morgan](https://github.com/TaylorMorgan7)
[Scott Burman](https://github.com/Scottburs)
