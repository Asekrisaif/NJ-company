"use client";
import ServicesDetails from "@/ui/ServicesDetails";
import TitleBanner from "@/ui/TitleBanner";
import { useState } from "react";

// Service data for each category
const servicesData = {
  tianli: [
    {
      no: "01",
      title: "RSS (IND-3)",
      detailsOne:
        "The specially designed strong nylon carcass is more suitable for harbor services of high torque and heavy load than regular tire",
      detailsTwo:
        "Wide pattern design tread provides a longer tire life in harbor services",
      detailsThree:
        "Suitable for straddle carriers, container forklifts, reach stackers and other machinery",
      imageUrl: "/images/11.png",
    },
    {
      no: "02",
      title: "IS (IND-3)",
      detailsOne:
        "Strong nylon carcass provides superior load carrying capacity",
      detailsTwo:
        "This special carcass design is more suitable for harbor services of high torque and heavy load than regular tire",
      detailsThree:
        "The wide riding tread, heavy lugs provide a superior long tire life",
      detailsFour: "Suitable for container forklifts and other machineries",
      imageUrl: "/images/is.png",
    },
    {
      no: "03",
      title: "Harbour3 (IND-3)",
      detailsOne:
        "Special products for port machinery equipment vehicles, mainly used for gantry crane",
      detailsTwo:
        "It provides superior wear resistance and high sidewall strength",
      detailsThree: "Suitable for low-speed use, not easy to drum or leak",
      imageUrl: "/images/harbour.png",
    },
    {
      no: "04",
      title: "Harbour3a (IND-3)",
      detailsOne:
        "Special products for port machinery equipment vehicles, mainly used for gantry crane",
      detailsTwo:
        "It provides superior wear resistance and high sidewall strength",
      detailsThree: "Suitable for low-speed use, not easy to drum or leak",
      imageUrl: "/images/a.png",
    },
    {
      no: "05",
      title: "DNR (Z) (IND-3)",
      detailsOne: "Strong nylon carcass provides a high load carrying capacity",
      detailsTwo:
        "This specially designed carcass is more suitable for harbour services of high torque and heavy load than regular tire",
      detailsThree:
        "The wider 'double-herringbone' and non-directional tread bars make the tire better resistance to heat buildup and good slippage-proof",
      detailsFour:
        "Suitable for straddle carriers, container forklifts, reach stackers and other machinery",
      imageUrl: "/images/dnr.png",
    },
    {
      no: "06",
      title: "DNR (Z) II (IND-3)",
      detailsOne: "Strong nylon carcass provides superior load capability",
      detailsTwo:
        "This special carcass design is more suitable for harbour services of high torque and heavy load than regular tire",
      detailsThree:
        "The wider 'double-herringbone' and non-directional tread bars make the tire better resistance to heat build-up, good slippage-proof and provide good performance at higher speed over long working hours",
      detailsFour:
        "Suitable for straddle carriers, container forklifts, reach stackers and other machinery ",
      imageUrl: "/images/dnrii.png",
    },
    {
      no: "07",
      title: "DnrzIII (IND-3)",
      detailsOne: "Strong nylon carcass provides superior load capability",
      detailsTwo:
        "This special carcass design is more suitable for harbour services of high torque and heavy load than regular tire",
      detailsThree:
        "The wider 'double-herringbone' and non-directional tread bars make the tire better resistance to heat build-up, good slippage-proof and provide good performance at higher speed over long working hours",
      detailsFour:
        "Suitable for straddle carriers, container forklifts, reach stackers and other machinery ",
      imageUrl: "/images/dnrziii.png",
    },
    {
      no: "08",
      title: "Harbour4a (IND-4)",
      detailsOne:
        "Special products for port machinery equipment vehicles, mainly used for front lifting and stacking machine",
      detailsTwo:
        "It provides superior wear resistance and high sidewall strength",
      detailsThree:
        "Suitable for low-speed use, for instance, construction sites and other road conditions, not easy to drum or leak",
      imageUrl: "/images/harbour4a.png",
    },
    {
      no: "09",
      title: "Harbour4pro (IND-4)",
      detailsOne:
        "Special products for port machinery equipment vehicles, mainly used for front lifting and stacking machine",
      detailsTwo:
        "It provides superior wear resistance and high sidewall strength",
      detailsThree:
        "Suitable for low-speed use, for instance, construction sites and other road conditions, not easy to drum or leak",
      imageUrl: "/images/harbour4pro.png",
    },
    {
      no: "10",
      title: "rss (IND-4)",
      detailsOne:
        "Strong nylon carcass and extra deep tread provide a longer tire life in harbor services",
      detailsTwo:
        "This special construction design makes the tire more suitable for harbor services of high torque and heavy load than regular tire",
      detailsThree:
        "Suitable for straddle carriers, container forklifts and other machinery",
      imageUrl: "/images/rssind4.png",
    },
    {
      no: "11",
      title: "sd&r (IND-4)",
      detailsOne:
        "Strong nylon carcass and premium deep tread design provide a longer tire life",
      detailsTwo:
        "The extra wide and deep lugs reduce slippage, increase stability and offer good traction, but its heat resistance is not good as IND-3 tires",
      detailsThree:
        "Suitable for straddle carriers, container forklifts, reach stackers and other machinery",
      imageUrl: "/images/sdr.png",
    },
    {
      no: "12",
      title: "sd&r ii (IND-4)",
      detailsOne:
        "Strong nylon carcass and premium deep tread design provide a longer tire life",
      detailsTwo:
        "The extra wide and deep lugs reduce slippage, increase stability and offer good traction, but its heat resistance is not good as IND-3 tires",
      detailsThree:
        "Suitable for straddle carriers, container forklifts, reach stackers and other machinery",
      imageUrl: "/images/sdrii.png",
    },
    {
      no: "13",
      title: "ss (IND-4)",
      detailsOne:
        "The specially designed strong nylon carcass provides superior load carrying capacity",
      detailsTwo:
        "The special carcass design is more suitable for harbor services of high torque and heavy load than regular tire",
      detailsThree:
        "The wide riding tread surface,smooth tread pattern with no lugs and extra deep tread provide a superior long tire life, reduce downtime loss from frequent tire changing and lower cost per hour",
      detailsFour: "Good operation on rough road surface ",
      detailsFive:
        "Suitable for reach stackers , container forklifts andd other machineries ",
      imageUrl: "/images/ss.png",
    },
    {
      no: "14",
      title: "smcxt4 (IND-4)",
      detailsOne:
        "Strong nylon carcass provides superior load carrying capacity",
      detailsTwo:
        "This special carcass design is more suitable for harbour services of high torque and heavy load than regular tire",
      detailsThree:
        "The wide riding tread, heavy lugs and extra deep tread can provide a superior long tire life, reduce downtime loss from frequent tire changing and lower cost per hour",
      detailsFour:
        "Suitable for straddle carriers, container forklifts and other machineries ",
      imageUrl: "/images/smcxt4.png",
    },
    {
      no: "15",
      title: "smls (IND-4)",
      detailsOne:
        "Strong nylon carcass construction for high rigidity and heavy-load carrying capacity",
      detailsTwo:
        "Cross and extra deep tread design can provide a superior long tire life",
      detailsThree: "Greater numbers of lugs produce good radiation of heat",
      detailsFour:
        "This harbour tire features both good heat resistance and wear resistance",
      detailsFive: "Suitable for all kinds of harbour machinery",
      imageUrl: "/images/smls.png",
    },
    {
      no: "16",
      title: "sxmh (IND-4)",
      detailsOne:
        "Strong nylon carcass provides superior load carrying capacity",
      detailsTwo:
        "This special carcass design is more suitable for harbour services of high torque and heavy load regular tire",
      detailsThree:
        "The wide riding tread, heavy lugs and extra deep tread can provide a superior long tire life, reduce downtime loss from frequent tire changing and lower cost per hour",
      detailsFour:
        "Suitable for straddle carriers, container forklifts and other machineries",
      imageUrl: "/images/aa.png",
    },
    {
      no: "17",
      title: "im (IND-4)",
      detailsOne:
        "Extra deep tread pattern for better resistance to wear abrasion and longer life",
      detailsTwo:
        "Suitable for straddle carriers, container forklifts and other machinery",
      imageUrl: "/images/im.png",
    },
    {
      no: "18",
      title: "hm-ht(IND-4)",
      detailsOne:
        "The specially designed semi-pattern and semi-smooth tire deals with the side wear effectively which feazes the user for harbor services tires",
      detailsTwo:
        "The wide riding tread, heavy lugs and extra deep tread provide a superior long tire life, reduce downtime loss from frequent tire changing and lower cost per hour",
      detailsThree: "Greater numbers of lugs produce good radiation of heat",
      detailsFour:
        "Suitable for straddle carriers, container forklifts and other machineries",
      imageUrl: "/images/hm-ht.png",
    },
    {
      no: "19",
      title: "ss (IND-5)",
      detailsOne:
        "The specially designed strong carcass provides superior load carrying capacity",
      detailsTwo:
        "This special carcass design is more suitable for harbor services of high torque and heavy load than regular tire",
      detailsThree:
        "The wide riding tread surface,smooth tread pattern with no lugs and extra deep tread provide a superior long tire life, reduce downtime loss from frequent tire changing and lower cost per hour",
      detailsFour: "Good operation on rough road surface",
      detailsFive:
        "Suitable for reach stackers,container forklifts and other machineries ",
      imageUrl: "/images/ss5.png",
    },
    {
      no: "20",
      title: "hm (IND-5)",
      detailsOne:
        "The specially designed strong nylon carcass provides superior load carrying capacity",
      detailsTwo:
        "This special carcass design is more suitable for harbor services of high torque and heavy load than regular tire",
      detailsThree:
        "The wide riding tread, heavy lugs and extra deep tread provide a superior long tire life, reduce downtime loss from frequent tire changing and lower cost per hour",
      detailsFour:
        "Suitable for straddle carriers, container forklifts and other machineries",
      imageUrl: "/images/hm.png",
    },
    {
      no: "21",
      title: "TUP408",
      detailsOne:
        "Strong and wide rib help offer outstanding stability and excellent traction",
      detailsTwo: "Special designed for terminal tractors",
      detailsThree: "Static free compound",
      imageUrl: "/images/tup408.png",
    },
    {
      no: "22",
      title: "TUP420",
      detailsOne: "New generation radial heavy forklift tyres",
      detailsTwo: "Robust sidewall guarantee great low deflection rate",
      detailsThree:
        "Cool running compound offer low heat build up in operation",
      imageUrl: "/images/tup420.png",
    },
    // Add more services with optional properties as needed
  ],
  advance: [
    {
      no: "01",
      title: "R-1W",
      detailsOne:
        "Wider tread,to effectively decrease contact area pressure and benfit for the crop root",
      detailsTwo: "Groove dipersive stress design,to make tread more puncture",
      detailsThree: "Deeper tread pattern, to provide more powerful traction",
      detailsFour: "Wear resistant compound, to prolong tire service life",
      detailsFive:
        "Radial tire gives better riding comfort, long tread life on the road and saves working hours",
      imageUrl: "/images/r1.png",
    },
    {
      no: "02",
      title: "r-1s",
      detailsOne: "Multi-angle bar design",
      detailsTwo: "Lower angle at the shoulder for better traction",
      detailsThree: "Higher angle at center of tread for longer wear",
      detailsFour:
        "Flexible sidewall compound with super-tough tread for superior,snag resistant and long wear",
      detailsFive:
        "A strong nylon carcass against mechanical failures and moisture deterioration",
      detailsSix:
        "Special tread design for puncture-resistnace in cotton and sugar cane field",
      imageUrl: "/images/r1s.png",
    },
    {
      no: "03",
      title: "r-1",
      detailsOne: "Universal tread pattern with better cost performance ratio",
      detailsTwo: "Excellent traction for common conditions applications",
      detailsThree:
        "Recommended for no heavy-duty, good conditions applications",
      imageUrl: "/images/r1.png",
    },
    {
      no: "04",
      title: "r-1k",
      detailsOne: "Universal tread pattern with better cost performance ratio",
      detailsTwo: "Excellent traction for common conditions applications",
      detailsThree:
        "Recommended for no heavy-duty, good conditions applications",
      imageUrl: "/images/r1k.png",
    },
    {
      no: "05",
      title: "r-1k*",
      detailsOne: "Universal tread pattern with better cost performance ratio",
      detailsTwo: "Excellent traction for common conditions applications",
      detailsThree:
        "Recommended for no heavy-duty, good conditions applications",
      imageUrl: "/images/r1kk.png",
    },
    {
      no: "06",
      title: "r-1a",
      detailsOne:
        "Larger lug for good wear, better puncture-resistant properties",
      detailsTwo:
        "Recommended for hillside operatins and for occasional short dirves on-the-road",
      imageUrl: "/images/r1a.png",
    },
    {
      no: "07",
      title: "r-1c",
      detailsOne:
        "Double angle design with a wide space between lugs to ensure self-cleaning, good traction, driving stability properties in any kind of soil",
      detailsTwo:
        "Larger lug for good wear, better puncture-resistant properties",
      detailsThree:
        "Recommended for hillside operatins and for occasional short dirves on-the-road",
      imageUrl: "/images/r1c.png",
    },
    {
      no: "08",
      title: "r-1e",
      detailsOne:
        "Double angle design with a wide space between lugs to ensure self-cleaning, good traction, driving stability properties in any kind of soil",
      detailsTwo:
        "Larger lug for good wear, better puncture-resistant properties",
      detailsThree:
        "Recommended for hillside operatins and for occasional short dirves on-the-road",
      imageUrl: "/images/r1e.png",
    },
    {
      no: "09",
      title: "r-1g",
      detailsOne:
        "23° tread bars provide good traction and self-cleaning properties",
      detailsTwo:
        "Larger lug for good wear, better puncture-resistant properties",
      detailsThree:
        "Recommended for hillside operatins and for occasional short dirves on-the-road",
      detailsFour:
        "Large contact area, good stability and traction in loose and soft field",
      imageUrl: "/images/r1g.png",
    },
    {
      no: "10",
      title: "r-1ig",
      detailsOne: "Special design for irrigation machines applications",
      detailsTwo:
        "Special ozone resistant comound of tread and sidewall ensure service more than 10 years",
      imageUrl: "/images/r1ig.png",
    },
    {
      no: "11",
      title: "r-1m",
      detailsOne:
        "23° tread bars provide good traction and self-cleaning properties",
      detailsTwo:
        "Larger lug for good wear, better puncture-resistant properties",
      detailsThree:
        "Recommended for hillside operatins and for occasional short dirves on-the-road",
      detailsFour:
        "Large contact area, good stability and traction in loose and soft field",
      imageUrl: "/images/r1m.png",
    },
    {
      no: "12",
      title: "r-1w",
      detailsOne:
        "Deeper lugs to provide high traction and self-cleaning under wet field conditions",
      detailsTwo:
        "Good tread compound for good tear-resistant, better puncture-resistant properties",
      detailsThree: "Good wear, long life",
      imageUrl: "/images/r1w.png",
    },
    {
      no: "13",
      title: "r-1y",
      detailsOne:
        "Deeper lugs to provide high traction and self-cleaning under wet field conditions",
      detailsTwo:
        "Good tread compound for good tear-resistant, better puncture-resistant properties",
      detailsThree: "Good wear, long life",
      detailsFour: "Drives stability and occasional short dirves on-the-road",
      imageUrl: "/images/r1y.png",
    },
    {
      no: "14",
      title: "r-1z",
      detailsOne:
        "Deeper lugs to provide high traction and self-cleaning under wet field conditions",
      detailsTwo:
        "Good tread compound for good tear-resistant, better puncture-resistant properties",
      detailsThree: "Good wear, long life",
      detailsFour: "Drives stability and occasional short dirves on-the-road",
      imageUrl: "/images/r1z.png",
    },
    {
      no: "15",
      title: "r-2",
      detailsOne:
        "Extra-deep tread for extra traction and less slip in wet soil",
      detailsTwo: "Curved tread bars self-clean better",
      detailsThree: "Buttressed tie bars for improved wear and performance",
      detailsFour: "Bolstered nose for long wear",
      imageUrl: "/images/r2.png",
    },
    {
      no: "16",
      title: "r-3",
      detailsOne:
        "Designed for multi-purpose tractors provides high flotationon soft soil",
      detailsTwo:
        "Suitable for sandy areas, airports,golf courses, and cemetery and on-the-road, industrial and road construction equipment",
      detailsThree:
        "Non-aggressive multi-block tread for excellent forward, reverse and lateral traction",
      detailsFour:
        "Maximum flotation and minimum turf disurbance assured for turf and other sensitive areas",
      detailsFive: "Strong nylon construction provides long life",
      imageUrl: "/images/r3.png",
    },
    {
      no: "17",
      title: "r-3a",
      detailsOne:
        "Designed for multi-purpose tractors provides high flotationon soft soil",
      detailsTwo:
        "Suitable for sandy areas, airports,golf courses, and cemetery and on-the-road, industrial and road construction equipment",
      detailsThree:
        "Non-aggressive multi-block tread for excellent forward, reverse and lateral traction",
      detailsFour:
        "Maximum flotation and minimum turf disurbance assured for turf and other sensitive areas",
      detailsFive: "Strong nylon construction provides long life",
      imageUrl: "/images/r3a.png",
    },
    {
      no: "18",
      title: "r-4",
      detailsOne: "Excellent traction and flotation characteristics",
      detailsTwo:
        "Wide lugs for optimum durability and long life in construction service",
      detailsThree: "Tough nylon-cord body for superior impact resistance",
      detailsFour: "Super-tough tread for long tire life on hard-surface roads",
      imageUrl: "/images/r4.png",
    },
    {
      no: "19",
      title: "r-4a xhd / ra-4a xhd+",
      detailsOne: "Excellent traction and flotation characteristics",
      detailsTwo:
        "Wide lugs for optimum durability and long life in construction service",
      detailsThree: "Tough nylon-cord body for superior impact resistance",
      detailsFour: "Super-tough tread for long tire life on hard-surface roads",
      imageUrl: "/images/r4axhd.png",
    },
    {
      no: "20",
      title: "r-4b",
      detailsOne: "Excellent traction and flotation characteristics",
      detailsTwo:
        "Wide lugs for optimum durability and long life in construction service",
      detailsThree:
        "Super-tough tread for long tire life on hard-surface roads",
      imageUrl: "/images/r4b.png",
    },
    {
      no: "21",
      title: "r-4d",
      detailsOne:
        "Industrial dirve wheel tires, constructed for non-agricultural applications",
      detailsTwo:
        "A heavy nylon construction and special compound are designated to achieve best results on industrial use as well as on / off-the-road and building site services",
      detailsThree:
        "The newly developed tread design gives more traction and breaking power as well as high mileage even in on-the-road service",
      imageUrl: "/images/r4d.png",
    },
    {
      no: "22",
      title: "r-4c",
      detailsOne:
        "Traction pattern suitable for front wheels of backhoe loader and wheel loaders",
      detailsTwo: "Designed for on and off-the road services in any weather",
      detailsThree:
        "Reinforced sidewall and strong nylon casing provides imporved resistance to road hazards",
      imageUrl: "/images/r4c.png",
    },
    {
      no: "23",
      title: "r-1t",
      detailsOne:
        "Deeper lugs with center wider studs provide excellent traction and good self-cleaning properties",
      detailsTwo:
        "Good tread compound for good tear-resistant, better puncture-resistant properties",
      detailsThree: "Good wear,long life",
      detailsFour: "Drives stability and occasional short dirves on-the-road",
      imageUrl: "/images/r1t.png",
    },
    {
      no: "24",
      title: "r-1x",
      detailsOne:
        "Deeper lugs with center wider studs provide excellent traction and good self-cleaning properties",
      detailsTwo:
        "Good tread compound for good tear-resistant, better puncture-resistant properties",
      detailsThree: "Good wear,long life",
      detailsFour: "Drives stability and occasional short dirves on-the-road",
      imageUrl: "/images/r1x.png",
    },
    {
      no: "25",
      title: "r-1z",
      detailsOne:
        "Deeper lugs with center wider studs provide excellent traction and good self-cleaning properties",
      detailsTwo:
        "Good tread compound for good tear-resistant, better puncture-resistant properties",
      detailsThree: "Good wear,long life",
      detailsFour: "Drives stability and occasional short dirves on-the-road",
      imageUrl: "/images/r1z.png",
    },
    {
      no: "26",
      title: "pr-1",
      detailsOne:
        "Extra-deep tread for extra traction and less slip in paddy field",
      detailsTwo: "Curved tread bars self-clean better",
      detailsThree: "Buttressed tie bars for improved wear and performance",
      detailsFour: "Bolstered nose for long wear",
      imageUrl: "/images/pr1.png",
    },
    {
      no: "27",
      title: "c-1a",
      detailsOne:
        "Applicable for vibrating roller operate on many kinds of pavement materials such as compacted subgrade and bituminous street",
      detailsTwo: "With excellent damping and compaction performance",
      detailsThree: "Reversed arc tread design wide and flat",
      detailsFour: "Tread compound has excellent oil resistance",
      imageUrl: "/images/c1a.png",
    },
    {
      no: "28",
      title: "C-7A",
      detailsOne:
        "Applicable for vibrating roller operate on many kinds of pavement materials such as compacted subgrade and bituminous street",
      detailsTwo: "With excellent damping and compaction performance",
      detailsThree: " Excellent flotation and traction performance",
      imageUrl: "/images/c7a.png",
    },
    {
      no: "29",
      title: "G-2E",
      detailsOne: "Applicable for road machinery like grader",
      detailsTwo: "Directional pattern design provides high traction",
      detailsThree:
        "Thicken tread shoulder design provides excellent cut-resistance",
      detailsFour:
        "Applicable for soft, muddy and sand terrain.Pattern has excellent self-clean and traction performance",
      imageUrl: "/images/g2e.png",
    },
    {
      no: "30",
      title: "G-3/E-3",
      detailsOne: "Applicable for road machinery like grader",
      detailsTwo:
        "Big lugs and wide tread design provides excellent traction, wear resistance and cut resistance ",
      detailsThree:
        "Applicable for soft, muddy and sand terrain. Pattern has excellent self-clean",
      imageUrl: "/images/g3e3.png",
    },
    {
      no: "31",
      title: "E-3",
      detailsOne: "Applicable for grader and telehandler",
      detailsTwo: "Rock and non-directional tread pattern design",
      detailsThree: "Excellent grip,traction and controllability",
      imageUrl: "/images/e3.png",
    },
    {
      no: "32",
      title: "E-3C",
      detailsOne: "Applicable for heavy-duty dump trucks",
      detailsTwo:
        "• Applicable for worse road like mining and construction sites",
      detailsThree: "Rock and non-directional tread pattern design",
      detailsFour: "Excellent grip,traction and controllability",
      imageUrl: "/images/e3c.png",
    },
    {
      no: "33",
      title: "E-3D",
      detailsOne: "Applicable for heavy-duty dump trucks",
      detailsTwo:
        "• Applicable for worse road like mining and construction sites",
      detailsThree: "Rock and non-directional tread pattern design",
      detailsFour: "Excellent grip,traction and controllability",
      imageUrl: "/images/e3d.png",
    },
    {
      no: "34",
      title: "M719",
      detailsOne: "Applicable for heavy-duty dump trucks",
      detailsTwo:
        "• Applicable for worse road like mining and construction sites",
      detailsThree:
        "Unique pattern design provides excellent grip and traction performance",
      detailsFour:
        "High strength carcass design plus excellent compound provides excellent puncture resistance, cut-resistant and wear resistance",
      imageUrl: "/images/m719.png",
    },
    {
      no: "35",
      title: "M778",
      detailsOne: "Applicable for heavy-duty dump trucks",
      detailsTwo:
        "• Applicable for worse road like mining and construction sites",
      detailsThree:
        "Rock and non-directional tread pattern design provides excellent grip and traction performance",
      detailsFour:
        "High strength carcass design plus excellent compound provides excellent puncture resistance, cut-resistant and wear resistance",
      imageUrl: "/images/m778.png",
    },
    {
      no: "36",
      title: "E-3C+",
      detailsOne: "Applicable for heavy-duty dump trucks",
      detailsTwo:
        "• Applicable for worse road like mining and construction sites",
      detailsThree: " Rock and non-directional tread pattern design",
      detailsFour: "BExcellent grip,traction and controllability",
      imageUrl: "/images/e3c.png",
    },
    {
      no: "37",
      title: "E-3L",
      detailsOne: "Applicable for heavy-duty dump trucks",
      detailsTwo:
        "• Applicable for worse road like mining and construction sites",
      detailsThree:
        "Innovative tread compound, robust tread blocks provides excellent wear resistance and longer service life",
      detailsFour:
        "Combinded high-performance environment friendly compound and reinforcing material of 66-nylon provides excellent fatigue-resistance, improved retreading, better for environment protection",
      imageUrl: "/images/e3l.png",
    },
    {
      no: "38",
      title: "E-4D",
      detailsOne: "Applicable for heavy-duty dump trucks",
      detailsTwo:
        "• Applicable for worse road like mining and construction sites",
      detailsThree:
        " Compound specially design for mining plus rock and deep tread design provides excellent puncture resistance,cut-resistance and wear resistance ",
      detailsFour:
        "• Combinded high-performance environment friendly compound and reinforcing material of 66-nylon provides excellent fatigue-resistance, improved retreading, better for environment protection ",
      imageUrl: "/images/e4d.png",
    },
    {
      no: "39",
      title: "E-2H",
      detailsOne: "Applicable for mini-loaders",
      detailsTwo: " Directional pattern design provides higher traction",
      detailsThree:
        " Big tread block design provides excellent traction and puncture-resistance",
      imageUrl: "/images/e2h.png",
    },
    {
      no: "40",
      title: "L-2A",
      detailsOne: "Applicable for loader and dozer ",
      detailsTwo:
        "Applicable for worse road like mining and construction sites ",
      detailsThree:
        "Traction pattern design provides excellent traction when operate on soft and muddy road",
      detailsFour:
        "Big tread block design gains excellent self-cleaning, traction and puncture resistance ",
      imageUrl: "/images/l2a.png",
    },
    {
      no: "41",
      title: "L-3B",
      detailsOne: "Applicable for loader and dozer ",
      detailsTwo:
        "Applicable for worse road like mining and construction sites ",
      detailsThree: "Rock and non-directional tread pattern design",
      detailsFour: "Provides excellent grip,traction and controllability",
      imageUrl: "/images/l3b.png",
    },
    {
      no: "42",
      title: "L-3K",
      detailsOne: "Applicable for loader and dozer ",
      detailsTwo:
        "Applicable for worse road like mining and construction sites ",
      detailsThree: "Rock and non-directional tread pattern design",
      detailsFour: "Provides excellent grip,traction and controllability",
      imageUrl: "/images/l3k.png",
    },
    {
      no: "43",
      title: "L-5K",
      detailsOne: "Applicable for loader and dozer ",
      detailsTwo:
        "Applicable for worse road like mining and construction sites ",
      detailsThree: "Rock and non-directional tread pattern design",
      detailsFour: "Provides excellent grip,traction and controllability",
      imageUrl: "/images/l5k.png",
    },
    {
      no: "44",
      title: "E-3/L-3",
      detailsOne: "Applicable for loader and dozer ",
      detailsTwo:
        "Applicable for worse road like mining and construction sites ",
      detailsThree: "Rock and non-directional tread pattern design",
      detailsFour: "Provides excellent grip,traction and controllability",
      imageUrl: "/images/ee.png",
    },
    {
      no: "45",
      title: "L-4S",
      detailsOne:
        "Applicable for Loader, Scraper, Mining trucks used underground",
      detailsTwo:
        "Applicable for severity road with rocks like underground and tunnels",
      detailsThree:
        "Special tread compound, smooth deep tread design provides excellent cut resistance, wear resistance, improve tire service life efficiently",
      detailsFour:
        "High-performance 66-nylon reinforcing material provides excellent impact resistance,puncture resistance and dimension stability",
      imageUrl: "/images/l4s.png",
    },
    {
      no: "46",
      title: "L-5SC",
      detailsOne:
        "Applicable for Loader, Scraper, Mining trucks used underground",
      detailsTwo:
        "• Applicable for severity road with rocks like underground and tunnels",
      detailsThree:
        "Special tread compound, smooth extra deep tread design provides excellent cut resistance, wear resistance, improve tire service life efficiently",
      detailsFour:
        " High-performance 66-nylon reinforcing material provides excellent impact resistance,puncture resistance and dimension stability",
      imageUrl: "/images/l5sc.png",
    },
    {
      no: "47",
      title: "L-1A",
      detailsOne: "Applicable for engineering vehicles used on sand",
      detailsTwo: " Rib pattern design",
      detailsThree: "Good driving stability",
      imageUrl: "/images/l1a.png",
    },
    {
      no: "48",
      title: "HF-1",
      detailsOne:
        " Applicable for equipments like vibrator vehicle used on desert and gobi",
      detailsTwo:
        " Flotation pattern design, larger contact aera, lower contact pressure, low inflation pressure without sinking",
      detailsThree:
        " With excellent puncture resistance and impact resistance, high passing on sand",
      imageUrl: "/images/hf1.png",
    },
    {
      no: "49",
      title: "IND-3J I",
      detailsOne: "Applicable for industrial vehicles like Fork lift",
      detailsTwo:
        "Design with flat and wider tread gives low contact pressure and stable driving",
      detailsThree: "Special tread compound provides excellent wear resistance",
      detailsFour: "Moderate tread depth demonstrate higher economic",
      imageUrl: "/images/ind3j.png",
    },
    {
      no: "50",
      title: "IND-4",
      detailsOne:
        "Applicable for industrial vehicles like Container stacker, Reach stacker",
      detailsTwo:
        "Robust extra deep tread design provides excellent wear resistance and longer service life",
      detailsThree:
        "Combinded high-performance environment friendly compound and reinforcing material of 66-nylon provides excellent fatigue-resistance, improved retreading, better for environment protection",
      detailsFour:
        "Wide and robust pattern and ultra-strengh carcass design provides excellent control stability",
      imageUrl: "/images/ind4.png",
    },
    {
      no: "51",
      title: "E-3A",
      detailsOne:
        "Applicable for industrial vehicles like Container stacker, Reach stacker",
      detailsTwo:
        " Rock and non-directional tread pattern design provides excellent control stability",
      detailsThree:
        "Pattern design with connected blocks in the middle of crown provides good driving stability and high driving comfort",
      detailsFour:
        "High-performance 66-nylon reinforcing material provides excellent fatigue resistance, improved retreading, better for environment protection",
      imageUrl: "/images/e3a.png",
    },

    {
      no: "52",
      title: "GR-A1",
      detailsOne: "High resistance against irregular wear.",
      detailsTwo:
        "The new contour shape ensures better pressure distribution, providing more even wear for high mileage.",
      detailsThree: "M+S and 3PMSF markings",
      imageUrl: "/images/gra1.png",
    },
    {
      no: "53",
      title: "GR-D1",
      detailsOne: "Excellent mileage performance.",
      detailsTwo:
        "Versatile multipurpose drive tyre for usage in a broad range of conditions.",
      detailsThree: "Superb traction level",
      detailsFour: "High resistance against irregular wear.",
      imageUrl: "/images/grd1.png",
    },
    {
      no: "54",
      title: "GR-D2",
      detailsOne: "Excellent mileage performance",
      detailsTwo:
        "Versatile multipurpose drive tyre for usage in a broad range of conditions. ",
      detailsThree: "Superb traction level.",
      detailsFour: "High resistance against irregular wear",
      imageUrl: "/images/grd2.png",
    },
    {
      no: "55",
      title: "GR-T1",
      detailsOne:
        "Features new rubber compounds so that less heat is able to develop in the tread.",
      detailsTwo:
        "The tread polymer improves rolling resistance and fuel efficiency",
      detailsThree:
        "Robust casing for longer tyre life and great retreadability.",
      detailsFour: "M+S and 3PMSF markings",
      imageUrl: "/images/grt1.png",
    },
    {
      no: "56",
      title: "GR-T2",
      detailsOne:
        "Features new rubber compounds so that less heat is able to develop in the tread.",
      detailsTwo:
        "The tread polymer improves rolling resistance and fuel efficiency",
      detailsThree:
        "Robust casing for longer tyre life and great retreadability.",
      detailsFour: "M+S and 3PMSF markings",
      imageUrl: "/images/grt2.png",
    },

    // Add more services with optional properties as needed
  ],
  domain: [
    {
      no: "01",
      title: "TX-D30 Scrubber Machine",
      detailsOne:
        "Floating brush disc design, self sensing should adjust the pressure of brush disc to the ground, so as to clean more thoroughly. The speed of the brush disc is centrifugal assisted, making pushing and washing easier. Thicken the water retaining strip to effectively prevent water splashing.",
      detailsTwo:
        "The cast aluminum integrated water absorption bar, withheavy arc design, has better water absorption effect. It can absorb water when turning 180 ° with the mold opening wat",
      detailsThree:
        "Front LED lights can work easily and efficiently even at night or in dim underground garages.",
      imageUrl: "/images/txd30.png",
    },
    {
      no: "02",
      title: "TX-30B Scrubber Machine",
      detailsOne:
        "Chaowei maintenance-free battery as the power, the battery does not need to add water, no post-maintenance, low-carbon and environmental protection.",
      detailsTwo:
        "Adopting original imported fan AMETK (AMETK) water-absorbing motor, with low noise and table performance.",
      detailsThree:
        "Small size of the product, beautiful appearance, enhance the image of the company.",
      imageUrl: "/images/tx30b.png",
    },
    {
      no: "03",
      title: "TX-D35 Scrubber Machine",
      detailsOne:
        "Original imported brush motor, stable performance; double-layer suction motor, strong suction power.",
      detailsTwo:
        "Large water injection port for fast water injection; removable overall sewage Tank cover, easy to clean the sewage tank.",
      detailsThree:
        "Standard with PU acidand alkali-resistant oilabsorbent rubber strips with hair skirt instead of the traditional rubber skirt, longer service life.",
      imageUrl: "/images/txd35.png",
    },
    {
      no: "04",
      title: "TX-D9 Scrubber Machine",
      detailsOne:
        "Anti slip and wearresistant rubber casters, industrial grade design, high friction a",
      detailsTwo:
        "Large capacity water tank design, open sewage tank cover and large opening design make it easier to clean the sewage tank. Sewage tank sensor, automatic induction alarm when sewage water is full, to protect the motor.",
      imageUrl: "/images/txd9.png",
    },

    // Add more services with optional properties as needed
  ],
  hosting: [
    {
      no: "01",
      title: "TECHNICAL PARAMETERS OF ND SERIES GAS GENERATOR SET",
      detailsOne:
        "Engine ignition mode: NPT ECU single cylinder independent ignition, WOODWARD, ALTRONIC, MOTORTECH ignition system",
      detailsTwo:
        "Engine speed control mode: GAC electronic control, WOODWARD, etc",
      detailsThree:
        "Genset control module: Smartgen controller, DEEPSEA, COMAP, etc",
      imageUrl: "/images/technical.png",
    },
    {
      no: "02",
      title: "TECHNICAL PARAMETERS OF NY SERIES GAS GENERATOR SET",
      detailsOne:
        "Engine ignition mode: WOODWARD, ALTRONIC, MOTORTECH ignition system",
      detailsTwo: "Engine speed control mode: WOODWARD, HEINZMANN, etc",
      detailsThree:
        "Unit control module: Smartgen controller, DEEPSEA, COMAP, etc",
      imageUrl: "/images/tp.png",
    },
    // Add more services with optional properties as needed
  ],
  tailift: [
    {
      no: "01",
      title: "Three-Wheel Mini Electric Forklift",
      detailsOne:
        "Compact size with small turning is suitable for narrow aisles and tight spaces",
      detailsTwo:
        "Standard EPS( Electric Steering ) provides easy control and handling",
      detailsThree:
        "Side-loading battery compartment for easily and quickly changing the battery",
      imageUrl: "/images/three.png",
    },
    {
      no: "02",
      title: "Counterbalance Stacker",
      detailsOne: "AC drive maintenance-free",
      detailsTwo:
        "Fall free lift for working inside the containers and areas with restricted heights",
      detailsThree: "Dual guard rails safely protect operator",
      imageUrl: "/images/count.png",
    },
    {
      no: "03",
      title: "Electric Reach Truck",
      detailsOne:
        "Curis AC controller with voltage and temperature protection and vertical drive",
      detailsTwo: "Standard EPS provides easy control and handling",
      detailsThree:
        "Must activate foot pedal switch in order to control the unit, increasing safety",
      imageUrl: "/images/electric.png",
    },
    {
      no: "0",
      title: "Double Pallet Electric Stacker ",
      detailsOne:
        "Curtis AC controller with voltage current and temperature protection, maintenance free",
      detailsTwo: "Standard EPS provides easy control and handling",
      detailsThree:
        "Majority of connections can be accessed quickly for easy maintenance",
      imageUrl: "/images/double.png",
    },

    // Add more services with optional properties as needed
  ],
  PTBariaTradinco: [],
  videos: {
    tianli: "/video/advance.mp4",
    advance: "/video/xinxu.mp4",
    domain: "/video/advance.mp4",
    hosting: "/video/xinxu.mp4",
    tailift: "/video/advance.mp4",
    PTBariaTradinco: "/video/xinxu.mp4",
  },
};

const Services = () => {
  const [category, setCategory] = useState<
    "tianli" | "advance" | "domain" | "hosting" | "tailift" | "PTBariaTradinco"
  >("tianli");

  // Fonction pour obtenir les services en fonction de la catégorie sélectionnée
  const getServices = () => {
    return servicesData[category] || [];
  };

  // Fonction pour obtenir l'URL de la vidéo en fonction de la catégorie sélectionnée
  const getVideoUrl = () => {
    console.log("Catégorie sélectionnée :", category); // Pour déboguer
    console.log("URL de la vidéo associée :", servicesData.videos[category]); // Pour déboguer
    return servicesData.videos[category];
  };
  

  return (
    <div>
      <TitleBanner subtitle="Explore the opportunities" title="Our Services" />
      <div className="max-w-full mx-auto pt-32">
        <div className="grid grid-cols-1 -mt-32 mb-20 lg:mb-0 md:grid-cols-2 lgl:grid-cols-6 font-titleFont font-semibold uppercase text-lg lgl:text-base text-center xl:text-lg px-4">
          {/* Boutons de Catégorie */}
          <p
            onClick={() => setCategory("tianli")}
            className={`${
              category === "tianli"
                ? "bg-secondaryColor text-white after:bg-secondaryColor after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : "hover:bg-white hover:text-secondaryColor border border-secondaryColor xl:border-r-0 bg-opacity-50"
            } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
          >
            Tianli
          </p>
          <p
            onClick={() => setCategory("advance")}
            className={`${
              category === "advance"
                ? "bg-secondaryColor text-white after:bg-secondaryColor after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : "hover:bg-white hover:text-secondaryColor border xl:border-r-0 border-secondaryColor bg-opacity-50"
            } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
          >
            Tires
          </p>
          <p
            onClick={() => setCategory("domain")}
            className={`${
              category === "domain"
                ? "bg-secondaryColor text-white after:bg-secondaryColor after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : "hover:bg-white hover:text-secondaryColor border border-secondaryColor xl:border-r-0 bg-opacity-50"
            } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
          >
            Scrubber Machine
          </p>
          <p
            onClick={() => setCategory("hosting")}
            className={`${
              category === "hosting"
                ? "bg-secondaryColor text-white after:bg-secondaryColor after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : "hover:bg-white hover:text-secondaryColor border border-secondaryColor xl:border-r-0 bg-opacity-50"
            } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
          >
            Gas Generator
          </p>
          <p
            onClick={() => setCategory("tailift")}
            className={`${
              category === "tailift"
                ? "bg-secondaryColor text-white after:bg-secondaryColor after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : "hover:bg-white hover:text-secondaryColor border border-secondaryColor xl:border-r-0 bg-opacity-50"
            } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
          >
            Handling Material
          </p>
          <p
            onClick={() => setCategory("PTBariaTradinco")}
            className={`${
              category === "PTBariaTradinco"
                ? "bg-secondaryColor text-white after:bg-secondaryColor after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : "hover:bg-white hover:text-secondaryColor border border-secondaryColor xl:border-r-0 bg-opacity-50"
            } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
          >
            PT.Baria Tradinco
          </p>
        </div>
        {/* Affichage des Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-10 lg:grid-cols-4 gap-1 mt-10 pb-10">
          {getServices().map((service, index) => (
            <ServicesDetails
              key={index}
              no={service.no}
              title={service.title}
              detailsOne={service.detailsOne}
              detailsTwo={service.detailsTwo}
              detailsThree={service.detailsThree}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
        {/* Affichage de la Vidéo */}
        {getVideoUrl() && (
          <div className="mt-10 mb-20 flex items-center justify-center w-full">
            <div className="w-[1400px] border-2 border-black rounded-lg">
              <video controls className="w-full h-[500px]">
                <source src={getVideoUrl()} type="video/mp4" />
                Votre navigateur ne supporte pas la balise vidéo.
              </video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;