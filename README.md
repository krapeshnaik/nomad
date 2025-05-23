# nomad

Multiple services integrations to display realtime feeds on an IoT device

## Description

Nomad is a backend Node.js application built with the Express framework. Its primary purpose is to aggregate and provide real-time feeds from various external services, specifically designed for display on an IoT device. Upon receiving a request, Nomad randomly selects one of its integrated services (News, Quotes, or Twitter) and returns the latest available data from that service.

## Features

-   Integration with News, Quotes, and Twitter APIs.
-   Random selection of a service feed on each request.
-   Provides a simple API endpoint for IoT devices to consume.