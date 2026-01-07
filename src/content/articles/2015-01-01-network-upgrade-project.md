---
layout: post
title: "Network Upgrade Project"
date: 2015-01-01
author: Kunal Vaidya
tags:
  - Network Upgrade
  - Cisco 
  - Routing
  - Switching
  - Catalyst 6500
---

I used to work as a Network Engineer at a Research Center in Silicon Valley. Being the only ‘network guy’ here, I was responsible for the management of all networking devices like Routers, Switches, Firewalls, Radius Servers, VPNs, Wireless controllers, Linux servers,  etc, etc… For a couple of years, we had been trying to replace our aging and end-of-life Cisco 6500 series switches. However, due to budgeting issues, the project kept getting punted to the new quarter or year. One fine day, in the 1st week of December 2014, the CFO tells my manager that we have the budget now. But there is a catch! It has to be completed by the end of the year. Yes, a whole rip and replace of about 3000 network ports in less than a month!

Long story short, we finalized Dell as the new vendor 🤦‍♂️ and worked with a re-seller for acquisition of the gear, along with cabling and other physical tasks. Around 15th of December, when all of the gear was received, we officially started the battle against time. And not to mention, like most other networking projects, this one too had to be done without any real downtime. The year-end slack period gave us a tiny bit of leeway to have some downtime, but we couldn't take down a whole bunch of servers for a few hours. So, the solution we came up with was to remove the old secondary core and replace that with a new one. All the Cisco-proprietary protocols like HSRP, EIGRP, etc. had to be migrated to industry standard ones. Once we ensures that both Cores are running VRRP correctly, we connected all the new switches (access and ToRs) to the new core switch. This enabled us to have both networks (old and new) active at the same time, with almost zero downtime.

## This was the existing infrastructure which had to be replaced:
- 2 Cisco 6500 Core Switches(Active/Standby)
- 6 Cisco 6500 Access Switches

![Description of image](/assets/images/Cisco-switches.jpg)


The 6500s carried all of our internal network traffic, including all kinds of servers, host PCs and VOIP phones. VOIP phones were connected to special POE line cards in the 6500 chassis. Evidently, each 6500 switch became a huge single point of failure, as a failure potentially took down a ton of critical production traffic. So, the single most important factor in the new network architecture had to be segregation.

## Below is the list of devices used in the new architecture:
- 2 Dell Force10 S4810 Core Switches(Active/Active)
- 11 Dell N4064 10G Top-of-Rack Switches
- 6 Stacks of Dell N3048P 1G Campus Switches (about 10 switches per stack, total 60 switches)


![Description of image](/assets/images/Dell-switches.jpg)

Finally, after 2 weeks of 14-16 hour days (including Christmas), we finished the project on the 31st of December (what a way to end the year!).  


## Below is a short summary of the project:
- The switches are now segregated into campus and data-center logical domains. All 11 top-of-rack and 6 stacked access switches have a 10G uplink to each of the 2 active-active core routers, making it a 20Gig uplink on each.
- The cores are running MLAG with an 80Gig link between the two. The traffic flow gets equally distributed between the 2 Cores, because the switches see the uplink as just 1 logical router.
- The production servers are happily connected to the Top-of-Rack switches with 10Gig each and any issue on the campus switches doesn’t affect them. This has dramatically improved the SLA as well as the bandwidth and performance.
- For the campus stacked switches, we acquired all POE switches, so we could accommodate workstations as well as VOIP phones in the same stack, as the price difference between POE and non-POE was trivial.

We did face a really annoying issue during the deployment of the campus switches with 802.1X authentication. Turns out, the Dell switches send MAC addresses in upper-case to the RADIUS server. Our Juniper SBR server had all entries in lower-case in its database, as the old Cisco devices dealt with lower-case ones. Also, VLANs which are supposed to be dynamically assigned, based on 802.1X cannot be present on the VLAN database on the switch. We were forced to change the RADIUS server database to all upper-case MAC addresses and delete the VLANs on the switches, which were to be dynamically assigned. That’s a really annoying bug in their code, in my opinion.

Please feel free to get in touch with me if you have questions or comments.
Cheers!

