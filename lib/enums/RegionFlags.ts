export enum RegionFlags
{
    None = 0,
    AllowDamage = 1 << 0,
    AllowLandmark = 1 << 1,
    AllowSetHome = 1 << 2,
    ResetHomeOnTeleport = 1 << 3,
    SunFixed = 1 << 4,
    TaxFree = 1 << 5,
    BlockTerraform = 1 << 6,
    BlockLandResell = 1 << 7,
    Sandbox = 1 << 8,
    NullLayer = 1 << 9,
    SkipAgentAction = 1 << 10,
    SkipUpdateInterestList = 1 << 11,
    SkipCollisions = 1 << 12,
    SkipScripts = 1 << 13,
    SkipPhysics = 1 << 14,
    ExternallyVisible = 1 << 15,
    MainlandVisible = 1 << 16,
    PublicAllowed = 1 << 17,
    BlockDwell = 1 << 18,
    NoFly = 1 << 19,
    AllowDirectTeleport = 1 << 20,
    EstateSkipScripts = 1 << 21,
    RestrictPushObject = 1 << 22,
    DenyAnonymous = 1 << 23,
    DenyIdentified = 1 << 24,
    DenyTransacted = 1 << 25,
    AllowParcelChanges = 1 << 26,
    AbuseEmailToEstateOwner = 1 << 27,
    AllowVoice = 1 << 28,
    BlockParcelSearch = 1 << 29,
    DenyAgeUnverified = 1 << 30
}