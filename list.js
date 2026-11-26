const info = [
  "dig https://hackycorp.com",
  'curl https://hackycorp.com -v -H "Host: vhost"',
  "curl https://hackycorp.com --dump-header- -o /dev/null",

  /*fuzz vhost*/`ffuf -w ~/Desktop/sec/ctf/SecLists/Discovery/Web-Content/directory-list-2.3-small.txt -u http://51.158.147.132 -H "Host: FUZZ.hackycorp.com" -mc 200 -fs 0-180`,
  /*fuzz vhost*/`ffuf -w ~/Desktop/sec/ctf/SecLists/Discovery/DNS/subdomains-top1million-5000.txt -u https://hackycorp.com -H "Host: FUZZ.hackycorp.com" -fs 107`,

  `for i in {1..20}; do curl -s -H "Host: balancer.hackycorp.com" "http://51.158.147.132/" ; done`, //query loadbalancer

  "dig TXT key.z.hackycorp.com",
  "dig AXFR key.z.hackycorp.com",
  "dig AXFR z.hackycorp.com @z.hackycorp.com", //query via specific dns srv
  "dig -t SOA key.z.hackycorp.com", //get DNS server

  ""
];
