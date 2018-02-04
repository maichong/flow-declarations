// Convented from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/ip

declare module ip {
  declare interface NodeBuffer {
  }

  declare interface SubnetInfo {
    networkAddress: string;
    firstAddress: string;
    lastAddress: string;
    broadcastAddress: string;
    subnetMask: string;
    subnetMaskLength: number;
    numHosts: number;
    length: number;

    contains(ip: string): boolean;
  }

  declare module .exports:{
    /**
     * Check two IP address are the same.
     **/
    isEqual(ip1: string, ip2: string): boolean;

    /**
     * Convert an IP string into a buffer.
     **/
    toBuffer(ip: string, buffer?: number, offset?: number): NodeBuffer;

    /**
     * Convert an IP buffer into a string.
     **/
    toString(ip: NodeBuffer, offset?: number, length?: number): string;

    /**
     * Get the subnet mask from a CIDR prefix length.
     *
     * @param family The IP family is infered from the prefixLength, but can be explicity specified as either "ipv4" or "ipv6".
     **/
    fromPrefixLen(prefixLength: number, family?: string): string;

    /**
     * Get the network ID IP address from an IP address and its subnet mask.
     **/
    mask(ip: string, mask: string): string;

    /**
     * Get the network ID IP address from an IP address in CIDR notation.
     **/
    cidr(cidr: string): string;

    /**
     * Get the bitwise inverse (NOT every octet) of an IP address or subnet mask.
     **/
    not(ip: string): string;

    /**
     * Get the bitwise OR of two IP addresses (usually an IP address and a subnet mask).
     **/
    or(ip: string, mask: string): string;

    /**
     * Check whether an IP is within a private IP address range.
     **/
    isPrivate(ip: string): boolean;

    /**
     * Check whether an IP is within a public IP address range.
     **/
    isPublic(ip: string): boolean;

    /**
     * Check whether an IP is a loopback address.
     **/
    isLoopback(ip: string): boolean;

    /**
     * Check whether an IP is a IPv4 address.
     **/
    isV4Format(ip: string): boolean;

    /**
     * Check whether an IP is a IPv6 address.
     **/
    isV6Format(ip: string): boolean;

    /**
     * Get the loopback address for an IP family.
     *
     * @param family The family can be either "ipv4" or "ipv6". Default: "ipv4".
     **/
    loopback(family?: string): string;

    /**
     * Get the address for the network interface on the current system with the specified 'name'.
     * If no interface name is specified, the first IPv4 address or loopback address is returned.
     *
     * @param name The name can be any named interface, or 'public' or 'private'.
     * @param family The family can be either "ipv4" or "ipv6". Default: "ipv4".
     **/
    address(name?: string, family?: string): string;

    /**
     * Convert a string IPv4 IP address to the equivalent long numeric value.
     **/
    toLong(ip: string): number;

    /**
     * Convert an IPv4 IP address from its the long numeric value to a string.
     **/
    fromLong(ip: number): string;

    /**
     * Get the subnet information.
     * @param ip IP address.
     * @param subnet Subnet address.
     */
    subnet(ip: string, subnet: string): SubnetInfo;

    /**
     * Get the subnet information.
     * @param cidr CIDR address.
     */
    cidrSubnet(cidr: string): SubnetInfo;
  }
}
